import React from 'react'

const layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
)
}

export default layout