import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
  padding: 36px 36px 76px;
  max-width: 390px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #400505;
  margin-top: 52px;
  margin-bottom: 38px;
`

export const Name = styled(motion.p)`
  font-family: Inter;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  margin: auto;
  color: #9b9b9b;
  user-select: none;
`

export const Ring = styled(motion.div)`
  height: 462px;
  width: 462px;
  border-radius: 50%;
  background-color: #f5f5f5;
  position: relative;
  display: flex;
`

export const Mojo = styled(motion.img)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  user-select: none;
`

export const Buttons = styled.div`
  display: flex;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 390px;
  margin: auto;
  background-color: white;
`

export const Return = styled.button`
  background-color: white;
  width: 100%;
  border: 0;
`

export const Check = styled.button`
  height: 100px;
  width: 100%;
  background: linear-gradient(31.62deg, #299f16 0%, #8bff78 100%);
  border-radius: 10px 0 0 10px;
  border: 0;
`
