import {authOptions} from "@api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

const ShopPage = async() => {

    const session = await getServerSession(authOptions)

    return (
        <div>
            <h1>Shop</h1>

            <p>{session?.user?.email}</p>

        </div>
    )
}
export default ShopPage