import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  FaHdd, FaClipboard, FaChartBar, FaCog, FaHome, FaBox, FaClipboardList, FaElementor, FaUser, FaUsers,
  FaSignOutAlt
} from 'react-icons/fa';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashboardRoutes from './Routes';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/dashboard/home">Home</Link>, '1', <FaHome />),
  getItem('Profile', '2', <FaUser />),
  getItem(<Link to="/dashboard/users">Users</Link>, '3', <FaUsers />),
  getItem(<Link to="/dashboard/products">Products</Link>, '4', <FaBox />),
  getItem(<Link to="/dashboard/orders">Orders</Link>, '5', <FaClipboardList />),
  getItem(<Link to="/dashboard/banners">Banners</Link>, '6', <FaElementor />),
  getItem('Settings', '7', <FaCog />),
  getItem('Backups', '8', <FaHdd />),
  getItem('Charts', '9', <FaChartBar />),
  getItem('All logs', '10', <FaClipboard />),
  getItem('Logout', '11', <FaSignOutAlt />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} style={{ position: "fixed", height: "100vh", left: 0, top: 0, bottom: 0, }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Content>
          <div
            style={{
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <DashboardRoutes />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;