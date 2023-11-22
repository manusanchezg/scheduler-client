export const statusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "#C1EDC5"
      case "pending":
        return "#FFE4B5"
      case "canceled":
        return "#D3D3D3"
      case "postponed":
        return "#ADD8E6"
      default:
        return "#CFBFA0"
    }
  }