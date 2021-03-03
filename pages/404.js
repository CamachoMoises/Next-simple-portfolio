import Link from "next/link";
import Layout from "../component/layout";

const Custom404 = ()=>(
    <Layout>
       <div className="text-center">
       <h1>404</h1>
        <p>Esta pagina no existe, por favor regresa a
            <Link href="/">
                <a> Home</a>
            </Link>
        </p>
       </div>
    </Layout>
);
export default Custom404;
