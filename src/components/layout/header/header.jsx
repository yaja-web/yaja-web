import CustomContainer from "@/components/ui/custom_container/custom_container";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./header.module.scss";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderDrawer from "./header_drawer/header_drawer";
import { List } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Header = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY >window.innerHeight - 100 )
    });
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <HeaderDrawer setShow={setShow} show={show} router={router} />
      <CustomContainer>
        <div className={styles.wrap}>
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="logo" fluid className={styles.logo} />
            </Link>
          </div>
          <nav>
            <ul>
              {PAGES.map((page) => (
                <li
                  key={page.name}
                  className={router.pathname === page.href ? styles.active : ""}
                >
                  <Link href={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
            <CustomButton>Order Now</CustomButton>
          </nav>

          {/* <div>
            <Link href="/">
              <Image
                src="/assets/playbtn.png"
                alt="logo"
                fluid
                className={styles.gbtn}
              />
            </Link>
            &nbsp; &nbsp;
            <Link href="/">
              <Image
                src="/assets/apple.svg"
                alt="logo"
                fluid
                className={styles.gbtn}
              />
            </Link>
          </div> */}
          <List
            className={styles.btn}
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
