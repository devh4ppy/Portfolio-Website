import { NextApiRequest, NextApiResponse } from "next";
import {services} from "../../data"

export default (req:NextApiRequest, res:NextApiResponse)=>{
    // by defualt get request

    res.status(200).json({services})
}