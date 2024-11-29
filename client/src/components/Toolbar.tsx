import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courseCategories } from "@/lib/utils";

const Toolbar = ({ onSearch, onCategoryChange }: ToolbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search courses"
        className="toolbar__search"
      />
      <Select onValueChange={onCategoryChange}>
        <SelectTrigger className="toolbar__select">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent className="bg-customTeals-primarybg hover:bg-customTeals-primarybg">
          <SelectItem value="all" className="toolbar__select-item">
            All Categories
          </SelectItem>
          {courseCategories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.label}
              className="toolbar__select-item"
            >
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Toolbar;
