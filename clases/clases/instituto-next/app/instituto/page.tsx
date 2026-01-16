import { Row, Col, Container } from 'react-bootstrap';
import Card from './componentes/Card';

export default function InstitutoPage() {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        <Col md={3}>
          <Card 
            titulo="Next.js"
            imagen="/next.png"
            destino="/instituto/next" 
          />
        </Col>
        <Col md={3}>
          <Card 
            titulo="Almeria"
            imagen="/almeria.jpeg"
            destino="/instituto/andalucia"
          />
        </Col>
      </Row>
    </Container>
  );
}