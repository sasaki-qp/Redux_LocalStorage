import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { users } from '../helper/constant';
import { resetUser, SelectedUser, setUser, User } from '../slice/userSlice';

export const Users: VFC = () => {
    console.log("DEBUG rendered users component")
    const dispatch = useAppDispatch()
    const selectedUser: User = useAppSelector(SelectedUser);
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <div 
                            key={user.id}
                            onClick={(_) => {
                                dispatch(
                                    user.id === selectedUser.id
                                    ? resetUser()
                                    : setUser(user)
                                )
                            }}
                        >
                            {user.id === selectedUser.id
                            ? `NAME: ${user.name} is selected`
                            : `ID: ${user.id}, AGE: ${user.age}, NAME: ${user.name}`
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
