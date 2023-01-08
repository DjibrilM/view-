import React, { useState } from "react";
import { useEffect } from "react";
import { TiWiFiOutline, TiWiFi } from 'react-icons/ti'
import { RiWifiOffLine } from 'react-icons/ri'

const Network = () => {
    const [showOnline, setShowOnline] = useState<boolean>();
    const [showOffline, setShowOffline] = useState<boolean>()

    useEffect(() => {
        window.addEventListener('offline', () => {
            setShowOffline(false);
            setShowOffline(true);
        })

        window.addEventListener('online', () => {
            setShowOffline(false);
            setShowOnline(true);
            setTimeout(() => {
                setShowOnline(false)
            }, 5000);
        })
    }, [])


    return <>
        <section className="w-full h-20 bg-green-400 fixed duration-500 z-50 flex flex-col items-center justify-center" style={showOnline ? { bottom: "-1px" } : { bottom: '-100px' }} >
            <div className="">
                <TiWiFi className="text-2xl text-gray-50" />
            </div>

            <div className="">
                <h1 className="text-gray-50">Connected To Internet</h1>
            </div>
        </section>

        <section className="w-full h-20 bg-red-400 fixed duration-500 z-50 flex flex-col items-center justify-center" style={showOffline ? { bottom: "-1px" } : { bottom: '-100px' }} >
            <div className="">
                <RiWifiOffLine className="text-2xl text-gray-50" />
            </div>

            <div className="">
                <h1 className="text-gray-50">No Internet connection</h1>
            </div>
        </section>
    </>;
};

export default Network;
