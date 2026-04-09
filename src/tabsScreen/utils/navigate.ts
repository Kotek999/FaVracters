import { router } from "expo-router";
import { RoutePath } from "../types";

export const navigate = (path: RoutePath) => router.push(path);
