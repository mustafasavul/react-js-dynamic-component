export function  baseParser(baseProps) {
    const {
        tapAction,
        analytics,
    } = baseProps ?? {};

    return {
        tapAction: tapAction,
        analytics: analytics,
    }
}