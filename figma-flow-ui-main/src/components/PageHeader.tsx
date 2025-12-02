import { ArrowLeft, Settings, SlidersHorizontal, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title?: string;
  showBack?: boolean;
  showSettings?: boolean;
  showFilter?: boolean;
  showBookmark?: boolean;
  isBookmarked?: boolean;
  onBookmarkToggle?: () => void;
}

const PageHeader = ({
  title,
  showBack = false,
  showSettings = false,
  showFilter = false,
  showBookmark = false,
  isBookmarked = false,
  onBookmarkToggle,
}: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between py-4">
      <div className="w-10">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
      </div>
      {title && (
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
      )}
      <div className="w-10 flex justify-end">
        {showSettings && (
          <button
            onClick={() => navigate("/configuracoes")}
            className="p-2 -mr-2 text-primary hover:brightness-110 transition"
          >
            <Settings className="w-6 h-6" />
          </button>
        )}
        {showFilter && (
          <button className="p-2 -mr-2 text-foreground hover:text-primary transition-colors">
            <SlidersHorizontal className="w-6 h-6" />
          </button>
        )}
        {showBookmark && (
          <button
            onClick={onBookmarkToggle}
            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors"
          >
            <Bookmark
              className="w-6 h-6"
              fill={isBookmarked ? "currentColor" : "none"}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
