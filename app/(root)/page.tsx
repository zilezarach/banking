'use client'

import HeaderBox from "@/components/HeaderBox"
import RecentTransactions from "@/components/RecentTransactions";
import TotalBalanceBox from "@/components/TotalBalance";
import RightSidebar from "@/components/RightSidebar";

const Home = async ({searchParams: {id,page}}: SearchParamProps) => {
    const loggedIn = {firstName: 'Stephen', lastName: 'Karani'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title= "Welcome"
                    user={ 'Stephen' || 'Guest'}
                    subtext="Connect all banks in one place."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={15882.22}
                />
                <RecentTransactions/>
            </header>
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 500000.50}]}
            
        />
    </section>
  )
}

export default Home