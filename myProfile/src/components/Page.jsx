import { useEffect } from "react";
import Pagelayout from "./Pagelayout";

import { Outlet } from 'react-router-dom';

function Page({currentPage}) {
    currentPage = currentPage.substring(1)

    useEffect(()=> {
        document.title=currentPage;
    }, [currentPage]);

    return (
        <section>
            <h2>{currentPage}</h2>
            <Pagelayout>
                <Outlet />
            </Pagelayout>
        </section>
    )
}

export default Page;