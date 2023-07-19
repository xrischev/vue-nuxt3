import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: '',
        email: '',
        role: '',
        loggedIn: false
    }),
    actions: {
        login({ name, email, role }) {
            this.name = name;
            this.email = email;
            this.role = role;
            this.loggedIn = true;
        },
        logout() {
            this.name = '';
            this.email = '';
            this.role = '';
            this.loggedIn = false;
        },
        updateUserInfo({ name, email, role }) {
            this.name = name;
            this.email = email;
            this.role = role;
        }
    }
})