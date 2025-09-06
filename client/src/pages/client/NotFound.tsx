import { Empty } from "antd";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
      <Empty description={false} />
    </div>
  );
}
