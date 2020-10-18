import { NextApiRequest, NextApiResponse } from "next";
import { updateChapter } from "server/actions/Chapter"
import { Chapter } from "utils/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    let chapterInfo: Chapter = req.body

    await updateChapter(chapterInfo)
    .then((payload) => 
        res.status(200).json({
            success: true,
            payload
        })
    )
    .catch((error)=>
        res.status(400).json({
            success: false, 
            message: error.message
        })
    )
}