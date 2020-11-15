import React from "react"
import Layout from "../components/layout"
import About from './about'
import Charte from './charte'
import Team from'./team'


export default function Home() {
  return (
    <Layout>
        <section id='news'>
            <h1>L'actu !</h1> 
            <p>Remi repaira cafe</p>
        </section>
        <section id='events'>
            <h1>Prochains événements</h1> 
            <p>Remi repaira cafe</p>
        </section>
        <Team></Team>
        <About></About>
        <section id='adhesion'>
            <h1>J'adhère et/ou je deviens bénévole</h1> 
            <p>Remi repaira cafe</p>
        </section>
        <Charte></Charte>
    </Layout>
  )
}
