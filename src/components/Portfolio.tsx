import React, { CSSProperties } from 'react';

interface PortfolioProps {
    title: string;
    investments: { stock: string; percentage: number }[];
}

const Portfolio = ({ title, investments }: PortfolioProps) => {
    return (
        <section id="portfolio" className="p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {investments.map((investment, index) => (
                        <div key={index} className="text-center">
                            <p className="mb-2">{investment.stock}</p>
                            <div className="radial-progress" style={{ "--value": investment.percentage } as CSSProperties}role="progressbar">
                                {investment.percentage}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;