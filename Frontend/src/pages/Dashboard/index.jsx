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
  getItem('Products', 'sub1', <FaBox />),
  getItem(<Link to="/dashboard/orders">Orders</Link>, '6', <FaClipboardList />),
  getItem('Banners', '7', <FaElementor />),
  getItem('Settings', '8', <FaCog />),
  getItem('Backups', '9', <FaHdd />),
  getItem('Charts', '10', <FaChartBar />),
  getItem('All logs', '11', <FaClipboard />),
  getItem('Logout', '12', <FaSignOutAlt />),
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