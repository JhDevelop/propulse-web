import React, { useState, useEffect } from 'react';

import "./SearchPage.css";
import ResultCard from '../components/ResultCard';


export default function SearchPage() {

    const [companys, setCompanys] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/company')
            .then(response => response.json())
            .then(data => {
                setCompanys(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/offert')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);

            })
            .catch(error => console.error(error));
    }, []);
    const companiesMap = new Map(companys.map(company => [company.company_id, company]));


    return (
        <div className="search-page-container">
            <title>SearchPage - Active Online Software Page</title>
            <meta
                property="og:title"
                content="SearchPage - Active Online Software Page"
            />
            <section className="search-page-hero">
            </section>
            <div className="search-page-container3">
                <div className="search-page-container4">
                    <select className="search-page-select">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className="search-page-container5">
                        <input
                            type="text"
                            placeholder="placeholder"
                            className="search-page-textinput input"
                        />
                    </div>
                </div>
                <div className="search-page-blog">
                    {data.map((item) => {
                        const foundCompany = companys.find(company => company.company_id === item.company_id);

                        return (
                            <div className="search-page-container6" key={item.company_id}>
                                <ResultCard
                                    title={item.title}
                                    description={item.description}
                                    company_name={foundCompany ? foundCompany.name : "Nombre no encontrado"}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}