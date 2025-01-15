import React, { useState } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import A_icon from "../assets/images/A _icon.png";
import gpt_icon from "../assets/images/gpt_icon.png";
import ABC from "../assets/images/ABC.jpg";

const Table = () => {

  const [rows, setRows] = useState([
    { id: 1, "Input Column": 'Oct 12, 2024 at 14:08 PM', "Action Column": 'Bitscale Evaluation - Account relev...', "Enrich Company": 'Bitscale Evaluation - Account relev...' },
    { id: 2, "Input Column": 'Oct 12, 2024 at 14:08 PM', "Action Column": 'cell data size exceeds limit', "Enrich Company": 'BMW Evaluation - Relevancy c...' },
    { id: 3, "Input Column": 'Oct 12, 2024 at 14:08 PM', "Action Column": 'https://www.linkedin.com/company/bit-scale/', "Enrich Company": 'Google Evaluation - Lilevancy...' },
    { id: 4, "Input Column": 'Oct 12, 2024 at 14:08 PM', "Action Column": 'Loading data, Please wait', "Enrich Company": 'Apple Evaluation - Olvancy che...' },
    { id: 5, "Input Column": 'Oct 12, 2024 at 14:08 PM', "Action Column": 'Loading data, Please wait', "Enrich Company": 'Figma Evaluation - Evancy che...' },
  ]);

  const [columns, setColumns] = React.useState([
    "Input Column",
    "Action Column",
    "Enrich Company",
  ]);

  const handleAddRow = () => {
    setRows([...rows,
    {
      id: rows.length + 1,
      ...columns.reduce((acc, column) => ({ ...acc, [column]: '' }), {}),
    },
    ]);
  };

  const handleDeleteRow = () => {
    if (rows.length > 5) {
      setRows(rows.slice(0, rows.length - 1));
    } else {
      alert("Initial rows cannot be deleted.");
    }
  };

  const handleAddColumn = () => {
    const newColumnName = `New Column ${columns.length + 1}`;
    setColumns([...columns, newColumnName]);
    setRows(rows.map((row) => ({ ...row, [newColumnName]: '' })));
  };

  const handleDeleteColumn = () => {
    if (columns.length > 3) {
      setColumns(columns.slice(0, columns.length - 1));
    } else {
      alert("Initial columns cannot be deleted.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-4">
        {/* -----------------------------Header ----------------------------------------*/}
        <div className="flex items-center justify-between mb-4 ml-4">
          <h1 className="text-lg font-semibold">
            <i className="pi pi-arrow-left mr-4"></i> Name of the file
          </h1>
          <div className="flex items-end space-x-5">
            <Button
              className="text-green-600 px-2 py-2 rounded-xl font-bold text-base"
              icon="pi pi-paperclip"
              label="Auto Save"
            />
            <Button
              className="text-orange-600 bg-orange-100 px-2 py-2 rounded-full"
              icon="pi pi-user"
            />
          </div>
        </div>

        {/* -------------------------------------Main Layout -----------------------------------------*/}
        <div className="flex">
          {/* ----------Navbar --------------*/}
          <div className="bg-white shadow-lg flex flex-col justify-between h-[90vh]">
            <div className="space-y-4 p-4">
              <div className="">
                <i className="pi pi-table text-2xl mx-2 my-2"></i>
              </div>
              <div className="">
                <i className="pi pi-gift text-2xl mx-2 my-2"></i>
              </div>
              <div className="">
                <i className="pi pi-eject text-2xl mx-2 my-2"></i>
              </div>
            </div>
            <div className="space-y-4 p-4">
              <div className="">
                <i className="pi pi-objects-column text-2xl mx-2 my-2"></i>
              </div>
              <div className="">
                <i className="pi pi-database text-2xl mx-2 my-2 text-pink-800"></i>
              </div>
            </div>
          </div>

          {/*------------------------------ Table Section ---------------------------------------*/}
          <div className="flex-1 ml-4">
            <div className="bg-white shadow rounded-lg-lg overflow-hidden">
              <div className="flex items-center border-b p-4 justify-between space-x-10">
                <div className="relative w-96">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="4"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      <line
                        x1="16.5"
                        y1="16.5"
                        x2="20"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border px-10 py-2 font-medium rounded-lg w-full"
                  />
                </div>
                <div className="flex space-x-16 pl-20">
                  <Button
                    className="text-gray-800 px-2 py-1 rounded-xl font-bold text-base"
                    icon="pi pi-sliders-h"
                    label="1/1 Row"
                  />
                  <Button
                    className="text-gray-800 px-2 py-1 rounded-xl font-bold text-base"
                    icon="pi pi-sliders-v"
                    label="3/3 Column"
                  />
                  <Button
                    className="text-gray-800 px-2 py-1 rounded-xl font-bold text-base"
                    icon="pi pi-filter"
                    label="0 Filter"
                  />
                  <Button
                    className="text-gray-800 px-2 py-1 rounded-xl font-bold text-base"
                    icon="pi pi-sort-alt"
                    label="Sort"
                  />
                </div>
                <div className='flex space-x-5 pl-80'>
                  <Button
                    icon="pi pi-sparkles"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-sm"
                    label="Enrich"
                  />
                  <Button
                    className="text-gray-800 px-4 py-2 rounded-full"
                    icon="pi pi-share-alt"
                  />
                  <Button
                    className="text-gray-800 px-4 py-2 rounded-full"
                    icon="pi pi-download"
                  />
                  <Button
                    className="text-red-600 px-4 py-2 rounded-full"
                    icon="pi pi-trash"
                  />
                </div>
              </div>

              {/* ---------------------------------Table Content--------------------------------- */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300">
                  {/* ----------------------Table Header---------------------- */}
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border border-gray-300"></th>
                      <th className="px-4 py-2 border border-gray-300"></th>
                      {columns.map((column, index) => (
                        <th key={index} className="px-4 py-2 border border-gray-300">
                          <div className="flex items-center">
                            {index === 0 && (
                              <img
                                src={ABC}
                                alt="Calendar"
                                className="w-6 h-6 mr-2"
                              />
                            )}
                            {index === 1 && (
                              <img
                                src={gpt_icon}
                                alt="Info"
                                className="w-6 h-6 mr-2"
                              />
                            )}
                            {index === 2 && (
                              <img
                                src={A_icon}
                                alt="Building"
                                className="w-6 h-6 mr-2"
                              />
                            )}
                            <input
                              type="text"
                              value={column}
                              onChange={(e) => {
                                const updatedColumns = [...columns];
                                updatedColumns[index] = e.target.value;
                                setColumns(updatedColumns);
                              }}
                              className="w-full px-2 py-1 border rounded-lg"
                            />
                          </div>
                        </th>
                      ))}
                      <th className="px-4 py-2 border border-gray-300 text-center">
                        <div className="flex flex-row space-x-2 items-center">
                          <Button
                            onClick={handleAddColumn}
                            icon="pi pi-plus"
                            className="bg-green-800 text-white px-4 py-2 rounded-lg shadow font-normal"
                            label="Add Column"
                          />
                          <Button
                            onClick={handleDeleteColumn}
                            icon="pi pi-trash"
                            className="bg-red-800 text-white px-4 py-2 rounded-lg shadow font-normal"
                            label="Delete Column"
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* --------------------------Table Body-------------------------- */}
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={row.id} className="border-b">
                        <td className="px-4 py-2 border border-gray-300">{row.id}</td>
                        <td className="pl-4 border-gray-300">
                          <Button
                            className="text-blue-600"
                            icon="pi pi-play-circle"
                          />
                        </td>
                        {columns.map((column, colIndex) => (
                          <td key={colIndex} className="px-4 py-2 border border-gray-300">
                            <input
                              type="text"
                              value={row[column] || ''}
                              onChange={(e) => {
                                const updatedRows = [...rows];
                                updatedRows[index][column] = e.target.value;
                                setRows(updatedRows);
                              }}
                              className="w-full px-2 py-1 border rounded-lg"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td className="px-4 py-2 border border-gray-300" colSpan="2"></td>
                      <td className="px-4 py-2 border border-gray-300 text-start" colSpan={columns.length}>
                        <div className="flex space-x-4">
                          <Button
                            onClick={handleAddRow}
                            className="bg-green-800 text-white px-4 py-2 rounded-lg shadow font-normal"
                            icon="pi pi-plus"
                            label="Add Row"
                          />
                          <Button
                            onClick={handleDeleteRow}
                            className="bg-red-800 text-white px-4 py-2 rounded-lg shadow font-normal"
                            icon="pi pi-trash"
                            label="Delete Row"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
