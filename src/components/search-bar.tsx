"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  name: string;
  date: string;
  url: string;
  content: string[];
}

interface SearchBarProps {
  blogs: Blog[];
  onFilteredResults: (filteredBlogs: Blog[]) => void;
  onSelectedIdChange: (selectedId: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  blogs,
  onFilteredResults,
  onSelectedIdChange,
}) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setShowSearch(false);
    setSearchTerm("");
    setSelectedIndex(0);
    onFilteredResults(blogs);
    onSelectedIdChange("0");
  }, [
    setShowSearch,
    setSearchTerm,
    setSelectedIndex,
    onFilteredResults,
    blogs,
    onSelectedIdChange,
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Show search when "/" is pressed
      if (event.key === "/" && !showSearch) {
        event.preventDefault();
        setShowSearch(true);
        setSelectedIndex(0);
        if (blogs.length > 0) {
          setTimeout(() => {
            onSelectedIdChange(blogs[0].id);
          }, 0);
        }
        // Focus input after state update
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }

      // Hide search when Escape is pressed
      if (event.key === "Escape" && showSearch) {
        handleClose();
      }

      // Arrow key navigation when search is open
      if (showSearch) {
        if (
          event.key === "ArrowDown" ||
          (event.key === "j" && (event.metaKey || event.ctrlKey))
        ) {
          event.preventDefault();
          setSelectedIndex((prev) => {
            const newIndex = prev < filteredBlogs.length - 1 ? prev + 1 : 0;
            if (filteredBlogs[newIndex]) {
              setTimeout(() => {
                onSelectedIdChange(filteredBlogs[newIndex].id);
              }, 0);
            }
            return newIndex;
          });
        }

        if (
          event.key === "ArrowUp" ||
          (event.key === "k" && (event.metaKey || event.ctrlKey))
        ) {
          event.preventDefault();
          setSelectedIndex((prev) => {
            const newIndex = prev > 0 ? prev - 1 : filteredBlogs.length - 1;
            if (filteredBlogs[newIndex]) {
              setTimeout(() => {
                onSelectedIdChange(filteredBlogs[newIndex].id);
              }, 0);
            }
            return newIndex;
          });
        }

        // Enter to navigate to selected blog
        if (event.key === "Enter" && filteredBlogs[selectedIndex]) {
          event.preventDefault();
          router.push(filteredBlogs[selectedIndex].url);
          handleClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    showSearch,
    filteredBlogs,
    selectedIndex,
    blogs,
    onSelectedIdChange,
    handleClose,
    router,
  ]);

  // Filter blogs based on search term
  useEffect(() => {
    let filtered: Blog[];

    if (searchTerm.trim() === "") {
      filtered = blogs;
    } else {
      // Enhanced search: search in both title and content
      filtered = blogs.filter((blog) => {
        const titleMatch = blog.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return titleMatch;
      });
    }

    setFilteredBlogs(filtered);
    onFilteredResults(filtered);

    // Reset selection to first item when filter changes
    setSelectedIndex(0);
    if (filtered.length > 0 && showSearch) {
      onSelectedIdChange(filtered[0].id);
    } else {
      onSelectedIdChange("");
    }
  }, [searchTerm, blogs, onFilteredResults, onSelectedIdChange, showSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Prevent closing when clicking inside the search box
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only close if the blur wasn't caused by clicking inside the search container
    e.preventDefault();
    setTimeout(() => {
      if (!document.activeElement?.closest(".search-container")) {
        handleClose();
      }
    }, 100);
  };

  // Return null when search is not shown
  if (!showSearch) {
    return null;
  }

  return (
    <div className="fixed left-0 right-0 z-50 p-4 bottom-10">
      <div className="w-full max-w-md mx-auto bg-black border rounded-lg shadow-lg search-container border-light-grey">
        <div className="p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search posts..."
            className="w-full px-3 py-2 text-white bg-black border rounded-md border-light-grey focus:outline-none focus:ring-2 focus:ring-light-green"
            autoFocus
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
