import {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  ReactNode,
} from "react";

// services
import { mockService } from "@/services";

// types
import { ChannelsContextType } from "./ChannelsContext.types";

const ChannelsContext = createContext<ChannelsContextType>({
  channels: [],
  isLoading: false,
});

const useChannels = () => useContext(ChannelsContext);

const ChannelsProvider = ({ children }: { children: ReactNode }) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchChannels = async () => {
    setIsLoading(true);
    try {
      const data = await mockService.getChannels();
      setChannels(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  const contextValue = useMemo(
    () => ({
      channels,
      isLoading,
    }),
    [channels, isLoading]
  );

  return (
    <ChannelsContext.Provider value={contextValue}>
      {children}
    </ChannelsContext.Provider>
  );
};

export { ChannelsProvider, ChannelsContext, useChannels };
