import React from "react";
import ReactDOM from 'react-dom';
import Header from "../components/header";
import "../home/home.css"
const Company = () => {
    {
        return (
            <>
                <Header />
                <div className="wrapper">
                    <h1>Company Name</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div>
                        <div className="buttonwrap pt-5">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Visit Company Website
                            </button>
                        </div>
                        <h2>
                            Jobs
                        </h2>
                        <section class="text-gray-600 body-font content: center">
                            <div class="container py-2">
                                <div class="flex flex-wrap -m-4">
                                    <div class="p-4 md:w-3/4">
                                        <div class="border-2 bg-gray-200 border-opacity-60 rounded-lg overflow-hidden content: center">
                                            <div class="p-4">
                                                <h3 class="title-font text-lg font-medium text-gray-900 mb-2">Job Title</h3>
                                                <p class="leading-relaxed mb-1 text-[16px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                                <div className="buttonwrap pt-5">
                                                    <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
                                                        Apply Now
                                                    </button>
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