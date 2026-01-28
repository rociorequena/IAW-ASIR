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
              {[1, 2, 3].map(n => (
                <NavDropdown.Item key={n} as={Link} href={`/generacion/gen${n}`}>{t.gen} {n}</NavDropdown.Item>
              ))}
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