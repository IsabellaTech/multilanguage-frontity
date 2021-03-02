import React, { useForm } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state, libraries, actions }) => {
  //const items = state.source.get(`/menu/${state.theme.menuUrl}/`)?.items;
  const items = state.theme.menu;
  const url = state.router.link;
  console.log(items)
  const options_lang = [
    { type: 'inputLanguage', value: 'en', label: 'English' },
    { type: 'inputLanguage', value: 'es', label: 'Español' },
  ]

  const handleInputChangeUrl = (e) => {
    console.log(e.target.baseURI);
    console.log(e.target.value);
    let newUrl = e.target.baseURI

    options_lang.map(({ value }, id) =>
      e.target.baseURI.includes(`/${value}/`) == true && (
        newUrl = newUrl.replace(value, e.target.value)
      )
    );

    actions.router.set(newUrl);

  }

  return (
    <MenuContainer>
      {items?.map((item, id) => {
        if (!item.child_items && !Array.isArray(item.languages)) {
          return (
            <MenuItem key={id} className={url == item.url ? "active-page" : ''}>
              <Link link={item.url}> {item.name} </Link>
            </MenuItem>
          );
        } else if (Array.isArray(item.languages)) {
          const languages = item.languages;
          return (
            <NavItemWithChild key={id}>
              <MenuItem key={id}>
                <Link link='#'> LANGUAGE </Link>
              </MenuItem>


              <ChildMenuDropdown className="dropdown">
                {languages.map((language, id) => {
                  return (
                    <a key={id} href={language.url}>{language.lang}</a>
                  );
                })}
              </ChildMenuDropdown>
            </NavItemWithChild>
          );
        }
        else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={id}>

              <MenuItem key={id} className={url == item.url ? "active-page" : ''}>
                <Link link={item.url}> {item.name} </Link>
              </MenuItem>

              <ChildMenuDropdown className="dropdown">
                {childItems.map((childItem, id) => {
                  return (
                    <Link key={id} link={childItem.url}>{childItem.name}</Link>
                  );
                })}
              </ChildMenuDropdown>
            </NavItemWithChild>
          );
        }


      })}



    </MenuContainer>
  );
};

export default connect(Nav);

const MenuContainer = styled.div`
  display: flex;
  justify-content:space-around;
  a:hover{
    text-decoration: underline;
    text-decoration-color: white;
  }
`;
const MenuItem = styled.div`
  font-size: 1.5rem;
  & > a {
    padding: 20px 20px;
    /* Use for semantic approach to style the current link */
   
  }
  color:white;
`;
const NavItemWithChild = styled.div`
  position: relative;
  display: inline-block;
  
  :hover .dropdown{
    display:block;
  }
  
`;
const ChildMenuDropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 32px;
  a{
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color:white;
  }
  a:hover {
    background-color: white;
    color:black;
  }
`;
