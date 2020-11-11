import { NextApiRequest, NextApiResponse } from "next";
import { deleteResource } from "server/actions/Resource";
import { Resource } from "utils/types";
import auth from "server/actions/Authenticate";

export default auth("admin", async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resource = req.body as Resource;

  try {
    const deleted = await deleteResource(resource);

    if (deleted) res.status(200).json({ success: true });
    else res.status(400).json({ success: false });
  } catch (_err) {
    const err = _err as Error;
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});
