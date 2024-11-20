import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import ReactDOM from "react-dom";
import {Header} from "../../dashboard/Header"
import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";

export const IataInfo = () => {
  const [customers, setCustomers] = useState(null);
  const [filters1, setFilters1] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  const [filters3, setFilters3] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  const [selectedCustomer2, setSelectedCustomer2] = useState(null);


  const statuses = [
    "unqualified",
    "qualified",
    "new",
    "negotiation",
    "renewal",
    "proposal",
  ];

  const filtersMap = {
    filters1: { value: filters1, callback: setFilters1 },
    filters2: { value: filters2, callback: setFilters2 },
    filters3: { value: filters3, callback: setFilters3 },
  };

  useEffect(() => {
    var IataCodes= require("airport-codes/airports.json")
    setCustomers(IataCodes)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const Iata = (rowData) => {
    return (
      <React.Fragment>
   
        <span className="image-text">{rowData.iata}</span>
      </React.Fragment>
    );
  };const AirPortName = (rowData) => {
    return (
      <React.Fragment>
        
        <span className="image-text">{rowData.name}</span>
      </React.Fragment>
    );
  };
  const longitude = (rowData) => {
    return (
      <React.Fragment>
        <span className="image-text">{rowData.longitude}</span>
      </React.Fragment>
    );
  };
    const Altitude = (rowData) => {
      return (
        <React.Fragment>
          <span className="image-text">{rowData.altitude}</span>
        </React.Fragment>
      );
    };
      const TimeZone = (rowData) => {
        return (
          <React.Fragment>
            <span className="image-text">{rowData.timezone}</span>
          </React.Fragment>
        );
      };
const Country = (rowData) => {
  return (
    <React.Fragment>

      <span className="image-text">{rowData.country}</span>
    </React.Fragment>
  );
};const CountryBodyTemplate = (rowData) => {
  return (
    <React.Fragment>
   
      <span className="image-text">{rowData.country}</span>
    </React.Fragment>
  );
};
  const City = (rowData) => {
    return (
      <React.Fragment>
   
        <span className="image-text">{rowData.city}</span>
      </React.Fragment>
    );
  };
  
  





  const statusBodyTemplate = (rowData) => {
    return (
      <span className={`customer-badge status-${rowData.status}`}>
        {rowData.status}
      </span>
    );
  };

  const statusFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        itemTemplate={statusItemTemplate}
        placeholder="Select a Status"
        className="p-column-filter"
        showClear
      />
    );
  };

  const statusItemTemplate = (option) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };

  const onGlobalFilterChange = (event, filtersKey) => {
    const value = event.target.value;
    let filters = { ...filtersMap[filtersKey].value };
    filters["global"].value = value;

    filtersMap[filtersKey].callback(filters);
  };

  const renderHeader = (filtersKey) => {
    const filters = filtersMap[`${filtersKey}`].value;

    return (
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={filters["global"].value || ""}
          onChange={(e) => onGlobalFilterChange(e, filtersKey)}
          placeholder="Global Search"
        />
      </span>
    );
  };

  const header2 = renderHeader("filters2");

  return (
    <Header>
      <div>
        <div className="card">
          <h5>AirPort Information</h5>
          <DataTable
            value={customers}
            paginator
            rows={15}
            header={header2}
            filters={filters2}
            onFilter={(e) => setFilters2(e.filters)}
            selection={selectedCustomer2}
            onSelectionChange={(e) => setSelectedCustomer2(e.value)}
            selectionMode="single"
            dataKey="id"
            responsiveLayout="scroll"
            stateStorage="local"
            stateKey="dt-state-demo-local"
            emptyMessage="No customers found."
          >
            <Column
              field="name"
              body={AirPortName}
              header="AirPort Name"
              sortable
              filter
              filterPlaceholder="Search by name"
            ></Column>
            <Column
              header="Country"
              body={Country}
              sortable
              sortField="representative.name"
              filter
              filterField="representative"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
            ></Column>
            <Column
              header="City"
              body={City}
              sortable
              sortField="representative.name"
              filter
              filterField="representative"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
            ></Column>{" "}
            <Column
              header="Iata Code"
              body={Iata}
              sortable
              sortField="country.name"
              filter
              filterField="country.name"
              filterPlaceholder="Search by country"
            ></Column>
            <Column
              field="city"
              header="TimeZone"
              body={TimeZone}
              sortable
              filter
              filterElement={statusFilterTemplate}
              filterMenuStyle={{ width: "14rem" }}
            ></Column>{" "}
            <Column
              header="Longitude"
              body={longitude}
              sortable
              sortField="representative.name"
              filter
              filterField="representative"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
            ></Column>{" "}
            <Column
              header="Altitude"
              body={longitude}
              sortable
              sortField="representative.name"
              filter
              filterField="representative"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </Header>
  );
};

