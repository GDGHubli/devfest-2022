import React from "react";
import ReactDOM from 'react-dom';
import { Link, useParams } from "react-router-dom";
import Header from "../components/header";
import "../home/home.css"
import CompanyData from "../data/companyData"
import { useEffect, useState } from "react";
const Company = () => {
    const { id } = useParams();
    // console.log(id)
    const [company, setcompany] = useState("");
    useEffect(() => {
        CompanyData.forEach(element => {
            if (element.comp_id === id) {
                setcompany(element);
            }
        });
    }, []);
    // console.log(company.jobTitle)

    {
        return (
            <>
                <Header />
                <div className="wrapper">
                    <h1>{company.companyName}</h1>
                    <p className="text-justify">{company.companyDes}</p>
                    <div>
                        <div className="buttonwrap pt-5">
                            <a href={company.websiteLink}>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Visit Company Website
                                </button>
                            </a>
                        </div>
                        <h2>
                            Jobs
                        </h2>
                        <section class="text-gray-600 body-font content: center">
                            <div class="container py-2">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-3/4 m-auto">
                                        <div class="shadow-xl border-2 bg-gray-200 border-opacity-60 rounded-lg overflow-hidden content: center">
                                            <div class="p-4 w-100">
                                                <h3 class="title-font text-lg font-medium text-gray-900 mb-2">{company.jobTitle}</h3>
                                                <p class="leading-relaxed mb-1 text-[16px] text-justify">{company.JobDes}</p>
                                                <div className="buttonwrap pt-5 flex align-end">
                                                    <a href={company.applyLink} class="bg-green-500 ml-auto hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
                                                        Apply Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    }
};
export default Company;