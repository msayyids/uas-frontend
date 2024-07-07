import styled from 'styled-components';

const Container = ({children})=>{

    const Div =styled.div`
    `
    return (
        <Div>{children}</Div>
    )
}

export default Container