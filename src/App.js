import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AddCategory from "./Components/Category/AddCate";
import { Layout } from "./Components/Layout/Index";

import DashboardMain from "./Components/Dashboard/DashboardMain";
import MainOrder from "./Components/Orders/MainOrder";
import MainCategory from "./Components/Category/MainCategory";
import MainPurchase from "./Components/PurchaseOrders/MainPurchase";
import MainAttributes from "./Components/Attributes/MainAttributes";
import MainProducts from "./Components/Products/MainProducts";
import MainCoupon from "./Components/Coupons/MainCoupon";
import MainVendors from "./Components/Vendors/MainVendors";
import MainTimesheet from "./Components/Timesheet/MainTimesheet";
import MainImportData from "./Components/ImportData/MainImportData";
import TopTenders from "./Components/Dashboard/TopTenders";
//import ProductTable from "./Components/Products/ProductTable";
import ProductEdit from "./Components/Products/ProductEdit";
import AddPo from "./Components/PurchaseOrders/AddPo";
import AddCoupon from "./Components/Coupons/AddCoupon";





function App() {
  return (
 
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashboardMain />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="order" element={<MainOrder />} />
          <Route path="category" element={<MainCategory />} />
          <Route path="purchase-data" element={<MainPurchase />} />
          <Route path="products" element={<MainProducts />} />
          <Route path="attributes" element={<MainAttributes />} />
          <Route path="import-data" element={<MainImportData />} />
          <Route path="coupons" element={<MainCoupon />} />
          <Route path="vendors" element={<MainVendors />} />
          <Route path="timesheet" element={<MainTimesheet />} />
          <Route exact path="addCategory" element={<AddCategory />} />
          <Route exact path="toptraders" element={<TopTenders />} />
          <Route exact path="productedit" element={<ProductEdit />} />
          <Route exact path="addpurchaseOrder" element={<AddPo />} />
          <Route exact path="addCoupon" element={<AddCoupon />} />

        </Route>
      </Routes>
  
  );
}
export default App;
