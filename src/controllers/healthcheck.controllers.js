import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";


// const healthCheck = async (req, res,next) => {
//     try {
//         const users = await getusers()
//         res
//             .status(200)
//             .json(new ApiResponse(200, { message: "Server is running! " }));
//     } catch (err) { 
//         next(err)
//     }
// };
const healthCheck = asyncHandler(async (req, res) => {
    res
        .status(200)
        .json(new ApiResponse(200, { message: "Server is running! " }))
});
export { healthCheck };