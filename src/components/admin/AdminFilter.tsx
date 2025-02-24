import { Input, Select, Space, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
// import { debounce } from 'lodash';
import dayjs from 'dayjs';

interface FilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export interface FilterValues {
  status?: string;
  searchText?: string;
  dateRange?: [dayjs.Dayjs, dayjs.Dayjs];
}

const AdminFilter = ({ onFilterChange }: FilterProps) => {
  const [filters, setFilters] = useState<FilterValues>({});

  const updateFilters = (newFilters: Partial<FilterValues>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleStatusChange = (value: string | undefined) => {
    updateFilters({ status: value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ searchText: e.target.value });
  };

  const handleDateRangeChange = (
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
    // dateStrings: [string, string]
  ) => {
    updateFilters({ dateRange: dates?.[0] && dates?.[1] ? [dates[0], dates[1]] : undefined });
  };

  return (
    <Space size="middle" className="mb-4">
      <Input
        placeholder="Tìm kiếm theo tên..."
        prefix={<SearchOutlined />}
        value={filters.searchText}
        onChange={handleSearchChange}
        style={{ width: 200 }}
      />
      <Select
        style={{ width: 150 }}
        placeholder="Trạng thái"
        allowClear
        onChange={handleStatusChange}
        value={filters.status}
      >
        <Select.Option value="Pending">Chờ xử lý</Select.Option>
        <Select.Option value="Completed">Hoàn thành</Select.Option>
      </Select>
      <DatePicker.RangePicker 
        onChange={handleDateRangeChange}
        value={filters.dateRange}
        showTime
        format="DD/MM/YYYY HH:mm"
      />
    </Space>
  );
};

export default AdminFilter; 