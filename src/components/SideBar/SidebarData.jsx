import React from "react";
import * as LuIcons from "react-icons/lu";
import * as HiIcons from "react-icons/hi";
import * as TbIcons from "react-icons/tb";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LuIcons.LuLayoutDashboard />,
  },
  {
    title: "Pay Now",
    path: "/pay",
    icon: <Fa6Icons.FaRegCreditCard />,
  },
  {
    title: "Ledger",
    path: "/ledger",
    icon: <FaIcons.FaBookOpen />,
  },
  {
    title: "Outstanding Report",
    path: "/outstandingReport",
    icon: <Fa6Icons.FaRegClipboard />,
  },
  {
    title: "Complaint",
    path: "/complaint",
    icon: <Fa6Icons.FaRegNewspaper />,
  },
  {
    title: "Send Notifications",
    path: "/sendnotification",
    icon: <IoIcons.IoMdNotificationsOutline />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <HiIcons.HiOutlineDocumentReport />,
  },
  {
    title: "Quick Reports",
    path: "/quickreports",
    icon: <TbIcons.TbReport />,
  },
  {
    title: "Vendor Management",
    path: "/",
    icon: <GrIcons.GrUserManager />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subItem: [
      {
        title: "Add Vendor Account",
        path: "/vendormanagement/addvendoraccount",
      },
      {
        title: "Update AMC/Workorder",
        path: "/vendormanagement/updateamcandworkorder",
      },
      {
        title: "Add Vendor Bill",
        path: "/vendormanagement/addvendorbill",
      },
      {
        title: "Vendor List",
        path: "/vendormanagement/vendorlist",
      },
    ],
  },
  {
    title: "Registers",
    path: "/",
    icon: <FaIcons.FaBook />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subItem: [
      {
        title: "'J' Form",
        path: "/registers/jform",
      },
      {
        title: "'I' Form",
        path: "/registers/iform",
      },
      {
        title: "Shares",
        path: "/registers/shares",
      },
      {
        title: "Nomination",
        path: "/registers/nomination",
      },
      {
        title: "Deposit",
        path: "/registers/deposit",
      },
      {
        title: "Insurance",
        path: "/registers/insurance",
      },
      {
        title: "Notice Board",
        path: "/registers/noticeboard",
      },
      {
        title: "Polling Booth",
        path: "/registers/pollingbooth",
      },
      {
        title: "Document Issue",
        path: "/registers/documentissue",
      },
      {
        title: "Documents Issued",
        path: "/registers/documentsissued",
      },
      {
        title: "Document Upload",
        path: "/registers/documentupload",
      },
      {
        title: "loan Register",
        path: "/registers/loanregister",
      },
      {
        title: "Tenant Register",
        path: "/registers/tenantregister",
      },
    ],
  },
  {
    title: "Member List",
    path: "/memeberlist",
    icon: <Fa6Icons.FaRegRectangleList />,
  },
  {
    title: "Masters",
    path: "/",
    icon: <MdIcons.MdOutlineAccountBalance />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subItem: [
      { title: "General Account", path: "/masters/generalaccount" },
      { title: "Account Category", path: "/masters/accountcategory" },
      { title: "Personal Account", path: "/masters/personalaccount" },
    ],
  },
  {
    title: "Transaction",
    path: "/",
    icon: <GrIcons.GrTransaction />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpened: <IoIcons.IoIosArrowUp />,
    subItem: [
      { title: "Bill Genration", path: "/transaction/billgeneration" },
      { title: "Member Receipt", path: "/memberreceipt" },
      { title: "Bank Receipt", path: "/transaction/bankreceipt" },
      { title: "Cash Receipt", path: "/transaction/cashreceipt" },
      {
        title: "Supplementary Receipt",
        path: "/transaction/supplementaryreceipt",
      },
      { title: "Bank Payment", path: "/transaction/bankpayment" },
      { title: "Cash Payment", path: "/transaction/cashpayment" },
      { title: "Bank Reconcillation", path: "/transaction/bankreconcillation" },
      { title: "Debit Note", path: "/transaction/debitnote" },
      { title: "Credit Note", path: "/transaction/creditnote" },
      { title: "Journal Voucher", path: "/transaction/journalvoucher" },
      { title: "Closing JV", path: "/transaction/closingjv" },
      { title: "Opening Balance", path: "/transaction/openingbalance" },
      { title: "Multiple Receipt", path: "/transaction/multiplereceipt" },
      { title: "Multiple Payment", path: "/transaction/multiplepayment" },
      { title: "Ledger Edit", path: "/transaction/ledgeredit" },
      {
        title: "Cheque Slip Generation",
        path: "/transaction/chequeslipgeneraton",
      },
    ],
  },
];
