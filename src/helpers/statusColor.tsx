import { colors } from "../styles/globalStyles"

export const statusColor = (status: string) => {
    switch (status) {
      case "approved":
        return colors.approved
      case "pending":
        return colors.pending
      case "canceled":
        return colors.canceled
      case "postponed":
        return colors.postponed
      default:
        return colors.backgroundSec
    }
  }