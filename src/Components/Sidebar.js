import React, { useEffect, useState } from "react";
import { MdAccountBalanceWallet} from 'react-icons/md';
import { sidebarData, links } from "./SidebarData";
import {IoMdSwap} from 'react-icons/io';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import ABIdata from "../contracts/ABIdata.json";
import { useNavigate } from "react-router-dom";
const Sidebar=()=>{
    const navigate = useNavigate()


      const [balance, setBalance]= useState("-");
      const [totalvalue, setTotalvalue]= useState("-");
      const [Burned, setBurned]= useState("-");
      const [totalSupply, setTotalSupply]= useState("-");
      const [symbol, setSymbol]= useState("-");
      const [volume, setVolume]= useState("-");
      const [currentprice, setCurrentprice]= useState("-");
      const [add, setAdd]= useState("-");


    // my deployed contract address- 0xda921622A3ED4b890614454cF8B5C481D077179f
    // 0x5778f02908a800a394c6e58968f574615241c680
    // const [data, setData] = useState("")
    

    const fetchdata= async ()=>{
        
        if(window.ethereum){
            const add = "0xda921622A3ED4b890614454cF8B5C481D077179f"
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const erc = new ethers.Contract(add, ABIdata, provider)
            console.log(erc);
            const tokenName = await erc.name();
            const tokenSymbol = await erc.symbol();
            const Supply = await erc.totalSupply();
            const totalSupply = Supply.toString() / 1e18;

        

            const provider2 = new ethers.providers.Web3Provider(window.ethereum);
            await provider2.send("eth_requestAccounts", []);
            const erc20 = new ethers.Contract(add, ABIdata, provider);
            const signer = await provider2.getSigner();
            
            const signerAddress = await signer.getAddress();
            console.log("address", signerAddress)
            
            const deci = await erc20.decimals();
            
            // balance ---------------------
            const b = await signer.getBalance();
            const converToEth = 1e18;
            const balance = b.toString() / converToEth;
            
            // Market Volume
            const marketVolume =  totalSupply * balance
            
            
            // const v = await erc20.totalValue();
            // console.log("pruth",v )

            // console.log("balance",String(balance))
            // console.log("address",signerAddress)
            // console.log("token name",tokenName)
            // console.log("token symbol",tokenSymbol)
            // // console.log("total supply",totalSupply)
            // console.log("volume",marketVolume)

            
    
            setBalance(String(balance).slice(0,5) );
            setVolume(String(marketVolume).slice(0,5));
            setTotalSupply(String(totalSupply));
            setSymbol(tokenSymbol);
            setAdd(signerAddress);
            


        }

        else{
            alert("need to install metamask");
        }
        

    }

    useEffect(()=>{
        fetchdata()
    },[])
  
    return<>
    
        
            <div className="navbar">
            
                <div className="nav-item">
                    <button className="btn">SWAP<span><IoMdSwap size={"2rem"}/></span></button>
                    <div className="btn2"><ConnectButton  label="CONNECT" /></div>
                    
                </div>
                
            </div>

          <div className="content">
          <div className="side-bar">
                    <h1 className="side-h">CORE</h1>
                    
                    {
                        sidebarData.map((data, i)=>(
                            <div key={i} onClick={()=>{navigate(`${data.path}`)}} >
                                <span>{data.icon}</span>
                                <li>{data.name}</li>
                            </div>
                        ))
                    }

                    <h1 className="side-l">LINKS</h1>

                    {
                        links.map((data, i)=>(
                            
                            <div key={i}>
                                <span>{data.icon}</span>
                                <li>{data.name}</li>
                            </div>
                            
                        ))
                    }
                    
                
            </div>

        

        <div className="container" >
            
            <div className="content1" >  
                <span><MdAccountBalanceWallet size={"1.2rem"}/></span>
                <p>Wallet Address - {add} </p>
                
            </div>
        


            <div className="content2">
                    <div>
                        <h4>My Total Token</h4>
                        <span>{balance} {symbol}</span>
                    </div>
                    <div>
                        <h4>My Total Value</h4>
                        <span>{totalvalue} $</span>
                    </div>
                    <div>
                        <h4>Token Burned</h4>
                        <span>{Burned} TKN</span>
                    </div>
                    <div>
                        <h4>Total Supply</h4>
                        <span>{totalSupply}</span>
                    </div>
                    <div>
                        <h4>Market Volume (USD)</h4>
                        <span>{volume}</span>
                    </div>
                    <div>
                        <h4>Current Price</h4>
                        <span>${currentprice}</span>
                    </div>
            </div>
        </div>
          </div>


    </>
}

export default Sidebar