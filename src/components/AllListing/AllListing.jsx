import React, { useState, useEffect } from "react";
import { Table, Input, Select, Button } from "antd";

const { Search } = Input;
const { Option } = Select;

const data = Array.from({ length: 100 }, (_, index) => ({
  key: String(index + 1),
  name: `Person ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20, // Random age between 20 and 69
  address: `Address ${index + 1}`,
}));

const columns = [
  {
    title: "LISTING NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ADDRESS",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "CITY",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "BEDROOMS",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "BATHROOMS	",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "CONTENT",
    dataIndex: "address",
    key: "address",
  },
];

export default function AllListing() {
  const [dataSource, setDataSource] = useState(data);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = function () {
    console.log(searchItem);
    const data = dataSource.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setDataSource(data);
  };

  return (
    <div>
      <div className="all-listingTable-header">
        <Search
          placeholder="Search"
          onSearch={handleSearch}
          onChange={(e) => setSearchItem(e.target.value)}
          style={{ width: 200, marginRight: 16 }}
        />
        <Select defaultValue="Sort By">
          <Option value={20}>20</Option>
          <Option value={50}>50</Option>
        </Select>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={true} />
    </div>
  );
}
