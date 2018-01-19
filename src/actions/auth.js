
export const LOGOUT = "auth/LOGOUT";

export const logout = () => {
    return {
        type: LOGOUT,
        payload: {}
    };
};
