import styled from 'styled-components'
import { Pagination } from 'swiper'

const Container = styled.div`

`


const SliderSlider = () => {
  return (
    <Container>
            <Pagination count={10} variant="outlined" shape="rounded" />
            
    </Container>
  )
}

export default SliderSlider