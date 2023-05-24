import user from "../../assets/user.png";
import help from "../../assets/question.png";
import logout from "../../assets/log-out.png";
import question from "../../assets/question.png";
import ProfileIcon from "../profile-icon/profile-icon.component";

import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';

import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import {
    MenuContainer,
    MenuItems,
    MenuTrigger,
    DropdownMenu,
    DropdownItems,
    InactiveDropdown
} from './user-dropdown.styles';

const UserDropdown = () => {
    const [open, setOpen] = useState(false);

    const currentUser = useSelector(selectCurrentUser);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <MenuContainer ref={menuRef}>
            <MenuTrigger as="div" onClick={() => { setOpen(!open) }}>
                <ProfileIcon />
            </MenuTrigger>
            {open ? (
                <DropdownMenu>
                    <h3>{currentUser?.displayName}</h3>
                        <MenuItems as='ul'>
                            <DropdownItem img={user} text={"My Profile"} />
                            <DropdownItem img={question} text={"FAQ"} />
                            <DropdownItem img={help} text={"Help Center"} />
                            <DropdownItem img={logout} text={"Log Out"} />
                        </MenuItems>
                </DropdownMenu>
            ) : (
                <InactiveDropdown></InactiveDropdown>
            )}
        </MenuContainer>
    )
}
type DropdownItemProps = {
    img: string;
    text: string;
};
const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());

    if (props.text === "Log Out") {
        return (
            <DropdownItems onClick={signOutUser}>
                <img src={props.img} alt=""></img>
                <a href="#">{props.text}</a>
            </DropdownItems>)
    }
    else {
        return (
            <DropdownItems>
                <img src={props.img} alt=""></img>
                <a href='#'>{props.text}</a>
            </DropdownItems>)
    };
}

export default UserDropdown;