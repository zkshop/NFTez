type IpfsUrl = { raw: string; gateway: string };

export function replaceIpfsUrls(obj: any, ipfsNode: string): Record<string, any> {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((val) => replaceIpfsUrls(val, ipfsNode));
  }

  return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
    const val = obj[key];
    if (typeof val === "string" && val.startsWith("ipfs://")) {
      const ipfsUrl: IpfsUrl = {
        raw: val,
        gateway: val.replace("ipfs://", ipfsNode),
      };
      acc[key] = ipfsUrl;
    } else {
      acc[key] = replaceIpfsUrls(val, ipfsNode);
    }
    return acc;
  }, {});
}
