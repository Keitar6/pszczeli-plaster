import { Description, DescriptionHPContainer, DescriptionTitle } from "./descriptionHP.styles"

export const DescriptionHP = ()=>{

    return(
        <DescriptionHPContainer>
            <DescriptionTitle>{`${String(
              "O nas"
            ).toUpperCase()}`}</DescriptionTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              similique laborum excepturi ducimus praesentium, sapiente cumque
              ipsum perspiciatis quod eos illum aliquam illo a, rem, recusandae
              veritatis quibusdam in tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              similique laborum excepturi ducimus praesentium, sapiente cumque
              ipsum perspiciatis quod eos illum aliquam illo a, rem, recusandae
              veritatis quibusdam in tempora?
            </Description>
          
        </DescriptionHPContainer>
    )
}