"use client";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext"; 
import "./Navigation.css";

export default function Navigation() {
  const { t, setLang } = useLanguage();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="nav1">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">{t.home}</Nav.Link>
            
            <NavDropdown title={t.gen}>
              <NavDropdown.Item as={Link} href="/generacion/gen1">{t.gen} 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/generacion/gen2">{t.gen} 2</NavDropdown.Item>
              
              <NavDropdown title={<span style={{ color: 'black' }}>{t.other}</span>} drop="end">
                <NavDropdown.Item as={Link} href="/pagina-404">
                  <span style={{ color: 'black' }}>{t.gen} 3</span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/generacion/gen4">
                  <span style={{ color: 'black' }}>{t.fourth} {t.gen}</span>
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <Nav.Link as={Link} href="/contacto">{t.contact}</Nav.Link>
          </Nav>
          <div className="nav2">
            <Button variant="outline-light" size="sm" onClick={() => setLang('es')}>ES</Button>
            <Button variant="outline-light" size="sm" onClick={() => setLang('en')}>EN</Button>
            <Button variant="outline-light" size="sm" onClick={() => setLang('fr')}>FR</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}