import Layout from "../component/layout";

const Index = ()=> (
    <Layout>
        {/** Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/profile.jpg" alt="profile pic" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1> Elmet Astrudi </h1>
                            <h3>Developer</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ut tenetur architecto inventore voluptas quidem iure sequi suscipit, ipsam vel aut, voluptatum ducimus rem. Blanditiis et placeat maiores expedita. At!</p>
                            <a href="/hire">Contratame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    </Layout>
)
 export default Index;