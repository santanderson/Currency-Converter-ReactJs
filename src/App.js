import React, { useRef, useState } from "react";
import { Title } from "./styled/style";
import { Box } from "./styled/style";
import "./styled/style.css";

export default function App() {
    api();

    const sel1 = useRef();
    const sel2 = useRef();
    const ipt1 = useRef();
    const ipt2 = useRef();
    const [Country, setCountry] = useState("United States Dollar");
    const [convCountry, setConvCountry] = useState("Brazilian Real");
    const [currencyToConvert, setCurrency] = useState();
    const [convCurrency, setConvCurrency] = useState();
    let currency;
    let bid;
    let usdBrl;
    const [v, setV] = useState(usdBrl);

    function api() {
        fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`, { method: 'GET' })
            .then(res => {
                if (res.status !== 200) window.alert('Error 404!');
                return res.json();
            })
            .then(resJson => {
                currency = resJson;
                bid = currency.USDBRL.bid;
                usdBrl = Number(bid);
            });
    }

    function changeCountry() {
        if (sel1.current.value == 1) setCountry(sel1.current.children[0].text);
        if (sel1.current.value == 2) setCountry(sel1.current.children[1].text);
        if (sel2.current.value == 1) setConvCountry(sel2.current.children[0].text);
        if (sel2.current.value == 2) setConvCountry(sel2.current.children[1].text);
        conversion();
    }

    function conversion() {
        if (sel1.current.value == sel2.current.value) {
            let conv = ipt1.current.value * 1;
            let conv2 = ipt2.current.value * 1;
            setCurrency(conv2.toFixed(2));
            setConvCurrency(conv.toFixed(2));
            setV(1)
        };

        if (sel1.current.value == 2 && sel2.current.value == 1) {
            let conv = ipt1.current.value * usdBrl;
            let conv2 = ipt2.current.value / usdBrl;
            let valor = 1 * usdBrl;
            setCurrency(conv2.toFixed(2));
            setConvCurrency(conv.toFixed(2));
            setV(valor.toFixed(2));
        }

        if (sel1.current.value == 1 && sel2.current.value == 2) {
            let conv = ipt1.current.value / usdBrl;
            let conv2 = ipt2.current.value * usdBrl;
            let valor = 1 / usdBrl;
            setCurrency(conv2.toFixed(2));
            setConvCurrency(conv.toFixed(2));
            setV(valor.toFixed(2));
        }
    }
    return (
        <>

            <Title>
                <span>1 {Country} equals</span>
                <h1>{v} {convCountry}</h1>
            </Title>

            <Box id="visor">
                <div>
                    <input type="number" defaultValue={currencyToConvert} ref={ipt1} onChange={conversion}></input>
                    <input type="number" disabled="disabled" defaultValue={convCurrency} ref={ipt2} onChange={conversion}></input>
                </div>

                <div>
                    <select ref={sel1} defaultValue="2" name="country to convert" onChange={changeCountry}>
                        <option value='1'>Brazilian Real</option>
                        <option value='2'>United States Dollar</option>
                    </select>
                    <select ref={sel2} name="country who has converted" onChange={changeCountry}>
                        <option value='1'>Brazilian Real</option>
                        <option value='2'>United States Dollar</option>
                    </select>
                </div>
            </Box>
        </>
    )
}