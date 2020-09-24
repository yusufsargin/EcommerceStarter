import { Button, Carousel, Space } from "antd";
import { Col, Row } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

export interface SliderContentProp {
  title: string;
  description: string;
  href: string;
}

export interface SliderProp {
  slider: SliderContentProp[];
}

export default function MainSlider({ slider }: SliderProp) {
  return (
    <Carousel
      effect='fade'
      autoplay
      className='py-5'
      style={{
        backgroundColor: "#EDEEF2",
      }}>
      {slider?.map((item: SliderContentProp, index: number) => {
        return (
          <div className='px-5' key={index}>
            <Row className='justify-content-center align-items-center'>
              <Col className='pr-5 text-center'>
                <h4>{item.title}</h4>
                <p>{item.description} </p>
                <Button
                  type='primary'
                  style={{
                    minWidth: 150,
                    backgroundColor: "#ff5d0d",
                    borderRadius: 10,
                    borderColor: "#ff5d0d",
                  }}>
                  Shop Now
                </Button>
              </Col>
              <Col className='p-2'>
                <div>
                  <img
                    width='300px'
                    height='100%'
                    src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                    alt='text'
                  />
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </Carousel>
  );
}
