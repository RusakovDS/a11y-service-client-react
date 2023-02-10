import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLogOutMutation } from "../../services/apis/authApi";
import { logout } from "../../services/slices/authSlice";
import { useAppDispatch } from "../../services/store";
import Logo from "../Logo";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logoutFromApi] = useLogOutMutation();
  const { user } = useAuth();

  async function handleLogoutButton() {
    await logoutFromApi();
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="flex items-center justify-between px-16">
      <Link to="/">
        <Logo />
      </Link>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <span>
              {user?.firstName || "User"} {user?.lastName}
            </span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2"
                    )}
                  >
                    Account settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogoutButton}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left"
                    )}
                  >
                    <span>Log out</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar;
