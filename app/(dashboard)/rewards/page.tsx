'use client'

import { useState } from 'react';
import { mockRewardHistory } from '@/lib/mock-data';
import { useAuth } from '@/context/AuthContext';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function RewardsPage() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(mockRewardHistory.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedHistory = mockRewardHistory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="px-6 pb-6" style={{ backgroundColor: '#F3F6FF' }}>
      
      <div className="flex justify-between items-center mb-4 mt-4">
        {/* Page Title */}
        <div>
          <h2 className="text-lg font-medium text-gray-700">Overview</h2>
        </div>
        
        {/* Buy Licenses Button */}
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm">
          <span>Buy Licenses</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-3">
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Total Earned (All Time)</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">47,035.9356</span>
            <span className="ml-1 text-sm font-medium text-cyan-600">SERV</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Most Recent Distribution</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">47,035.9356</span>
            <span className="ml-1 text-sm font-medium text-cyan-600">SERV</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Most Recent Daily Points</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">20,000</span>
          </div>
        </div>
      </section>

      {/* Reward History Section */}
      <h2 className="text-lg font-medium text-gray-700 mb-4">Reward History</h2>
      <section className="bg-white rounded-lg shadow-sm p-4">
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-xs font-medium text-gray-500 uppercase py-3">Date</TableHead>
                <TableHead className="text-xs font-medium text-gray-500 uppercase py-3">Points</TableHead>
                <TableHead className="text-xs font-medium text-gray-500 uppercase py-3">Rank</TableHead>
                <TableHead className="text-xs font-medium text-gray-500 uppercase py-3">Reward</TableHead>
                <TableHead className="text-xs font-medium text-gray-500 uppercase py-3">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedHistory.map((item) => (
                <TableRow key={item.id} className="border-b border-gray-100">
                  <TableCell className="py-4 text-sm text-gray-800">{item.date}</TableCell>
                  <TableCell className="py-4 text-sm text-gray-800">{item.points.toLocaleString()}</TableCell>
                  <TableCell className="py-4 text-sm text-gray-800">{item.rank}</TableCell>
                  <TableCell className="py-4 text-sm font-medium text-cyan-600">{item.reward}</TableCell>
                  <TableCell className="py-4">
                    <Badge 
                      className={item.status === 'Distributed' 
                        ? 'bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-3 py-1 text-xs font-medium' 
                        : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100 rounded-full px-3 py-1 text-xs font-medium'}
                    >
                      {item.status === 'Distributed' ? '• Distributed' : '• Pending'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center justify-center mt-8">
          <Pagination>
            <PaginationContent className="flex items-center space-x-1">
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} text-gray-500 hover:text-gray-700`}
                />
              </PaginationItem>
              
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(1);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 1 ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === 2}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(2);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 2 ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === 3}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(3);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 3 ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === 4}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(4);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 4 ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  4
                </PaginationLink>
              </PaginationItem>
              
              <PaginationItem className="text-gray-400">...</PaginationItem>
              
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === 7}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(7);
                  }}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 7 ? 'bg-cyan-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  7
                </PaginationLink>
              </PaginationItem>
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} text-gray-500 hover:text-gray-700`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
}