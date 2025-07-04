import React from 'react';
import StockTicker from '@/app/components/investors/StockTicker';
import Reports from '@/app/components/investors/Reports';
import Governance from '@/app/components/investors/Governance';
import BoardCommittees from '@/app/components/investors/BoardCommittees';
import ESG from '@/app/components/investors/ESG';
import Filings from '@/app/components/investors/Filings';
import InvestorContact from '@/app/components/investors/InvestorContact';


const InvestorRelationsPage = () => {
  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Investor Relations Hub</h1>
        <div className="space-y-12">
          <StockTicker />
          <Reports />
          <Governance />
          <BoardCommittees />
          <ESG />
          <Filings />
          <InvestorContact />
        </div>
      </main>
    </div>
  );
};

export default InvestorRelationsPage;
